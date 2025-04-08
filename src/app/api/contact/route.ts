import { NextResponse } from "next/server"
import { Resend } from "resend"

// Créez un compte gratuit sur resend.com et obtenez une clé API
// Ajoutez cette clé comme variable d'environnement RESEND_API_KEY
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validation des données
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Tous les champs sont requis" }, { status: 400 })
    }

    // Vérification de la variable d'environnement
    if (!process.env.RESEND_API_KEY) {
      console.error("La variable d'environnement RESEND_API_KEY n'est pas définie")
      return NextResponse.json(
        { error: "Configuration du serveur incomplète. Veuillez contacter l'administrateur." },
        { status: 500 },
      )
    }

    try {
        const { data, error } = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: ["haithem.hammami.pro@gmail.com"],
            replyTo: email, // Fixed property name
            subject: `Contact Portfolio: ${subject}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #00A6C7;">Nouveau message de contact</h2>
                <p><strong>Nom:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Sujet:</strong> ${subject}</p>
                <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #00A6C7;">
                  <p><strong>Message:</strong></p>
                  <p>${message.replace(/\n/g, "<br>")}</p>
                </div>
                <p style="margin-top: 20px; font-size: 12px; color: #666;">
                  Ce message a été envoyé depuis le formulaire de contact de votre portfolio.
                </p>
              </div>
            `,
          });

      if (error) {
        console.error("Erreur Resend:", error)
        throw new Error(error.message)
      }

      console.log("Email envoyé avec succès:", data?.id)
      return NextResponse.json({ success: true, message: "Email envoyé avec succès!" }, { status: 200 })
    } catch (sendError) {
      console.error("Erreur lors de l'envoi de l'email:", sendError)
      return NextResponse.json(
        { error: "Erreur lors de l'envoi de l'email. Veuillez réessayer plus tard." },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Erreur générale:", error)
    return NextResponse.json({ error: "Une erreur est survenue lors du traitement de votre demande" }, { status: 500 })
  }
}

