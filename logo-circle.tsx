"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download } from "lucide-react"

export default function LogoCircle() {
  const [activeColor, setActiveColor] = useState("white")

  const colors = {
    white: "#FFFFFF",
    black: "#000000",
    primary: "#7C3AED",
    secondary: "#3B82F6",
  }

  const downloadSVG = () => {
    const svgElement = document.getElementById("logo-circle-svg")
    if (svgElement) {
      const svgText = svgElement.outerHTML
      const blob = new Blob([svgText], { type: "image/svg+xml" })
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = `hh-logo-circle-${activeColor}.svg`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <div className="container mx-auto py-10 space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">H.Haithem Circle Logo</h1>
        <p className="text-muted-foreground">Perfect for profile pictures and icons</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div
              className={`flex items-center justify-center h-[300px] ${activeColor === "white" ? "bg-slate-900" : "bg-slate-100"}`}
            >
              <svg
                id="logo-circle-svg"
                width="200"
                height="200"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="100" cy="100" r="90" stroke={colors[activeColor as keyof typeof colors]} strokeWidth="2" />

                {/* Modern Geometric H */}
                <path
                  d="M60 60V140M60 100H90M90 60V140"
                  stroke={colors[activeColor as keyof typeof colors]}
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Calligraphic H */}
                <path
                  d="M110 60C110 60 110 80 110 100C110 120 110 140 110 140C110 140 125 140 140 140C155 140 155 120 140 120C125 120 110 120 110 120"
                  stroke={colors[activeColor as keyof typeof colors]}
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M110 60C110 60 125 60 140 60C155 60 160 75 145 90C130 105 110 100 110 100"
                  stroke={colors[activeColor as keyof typeof colors]}
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Circle Logo Description</h2>
            <p className="text-muted-foreground">
              This circular version of the logo is perfect for profile pictures, app icons, and social media avatars.
              The encircling element adds balance and makes the logo more versatile for various applications while
              maintaining the fusion of modern geometric and calligraphic styles.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Color Options</h3>
            <div className="flex flex-wrap gap-2">
              {Object.keys(colors).map((color) => (
                <Button
                  key={color}
                  variant={activeColor === color ? "default" : "outline"}
                  className="flex-1"
                  onClick={() => setActiveColor(color)}
                  style={{
                    backgroundColor: activeColor === color ? colors[color as keyof typeof colors] : "",
                    color:
                      activeColor === color ? (color === "white" || color === "secondary" ? "black" : "white") : "",
                    borderColor: activeColor !== color ? colors[color as keyof typeof colors] : "",
                  }}
                >
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2">Usage Guidelines</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Ideal for profile pictures and app icons</li>
              <li>Maintain the circular shape without distortion</li>
              <li>For small sizes, use the simplified version without the outer circle</li>
              <li>Works well on both light and dark backgrounds with appropriate color selection</li>
            </ul>
          </div>

          <Button onClick={downloadSVG} className="w-full">
            <Download className="mr-2 h-4 w-4" />
            Download Circle Logo SVG
          </Button>
        </div>
      </div>
    </div>
  )
}

