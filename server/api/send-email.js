import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
    try {
        const config = useRuntimeConfig();
        const body = await readBody(event);
        const token = body.recaptchaToken;
        const secret = process.env.RECAPTCHA_SECRET_KEY;

        if (!token || !secret) {
            event.node.res.statusCode = 400;
            return { message: "Token reCAPTCHA ou clé manquante" };
        }

        const res = await $fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: "POST",
            body: new URLSearchParams({ secret, response: token }).toString(),
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        });

        if (process.env.NODE_ENV !== 'production') {
            console.warn("reCAPTCHA ignoré en mode développement");
        } else {
            if (!res.success || res.score < 0.5) {
                event.node.res.statusCode = 403;
                return { message: "Suspicion de bot détectée" };
            }
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: config.emailUser,
                pass: config.emailPass
            },
        });

        const mailOptions = {
            from: body.email?.includes("@")
                ? body.email
                : '"Site Web Ortega" <no-reply@dentiste-ortega.fr>',
            to: "dr.maxime.ortega@gmail.com",
            subject: `📌 ${body.subject || "Nouveau message"}`,
            text: `
📩 Nouveau message :
Nom : ${body.name}
Téléphone : ${body.phone}
Email : ${body.email || "Non fourni"}
Message : ${body.message || "Non fourni"}
`,
        };

        await transporter.sendMail(mailOptions);

        return { message: "E-mail envoyé avec succès !" };
    } catch (error) {
        console.error("Erreur API:", error);
        event.node.res.statusCode = 500;
        return { message: "Erreur d'envoi du mail." };
    }
});
