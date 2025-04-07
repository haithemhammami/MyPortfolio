"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Copy, Check, Download } from "lucide-react"

export default function LogoDesign() {
  const [copied, setCopied] = useState(false)
  const [activeColor, setActiveColor] = useState("white")
  const [activeStyle, setActiveStyle] = useState("style1")

  const colors = {
    white: "#FFFFFF",
    black: "#000000",
    primary: "#7C3AED",
    secondary: "#3B82F6",
    accent: "#EC4899",
  }

  const copyToClipboard = () => {
    const svgElement = document.getElementById("logo-svg")
    if (svgElement) {
      const svgText = svgElement.outerHTML
      navigator.clipboard.writeText(svgText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const downloadSVG = () => {
    const svgElement = document.getElementById("logo-svg")
    if (svgElement) {
      const svgText = svgElement.outerHTML
      const blob = new Blob([svgText], { type: "image/svg+xml" })
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = `hh-logo-${activeStyle}-${activeColor}.svg`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const renderLogo = (style: string, color: string) => {
    if (style === "style1") {
      return (
        <svg
          id="logo-svg"
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Modern Geometric H */}
          <path
            d="M50 40V160M50 100H90M90 40V160"
            stroke={colors[color as keyof typeof colors]}
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Calligraphic H */}
          <path
            d="M110 40C110 40 110 70 110 100C110 130 110 160 110 160C110 160 130 160 150 160C170 160 170 130 150 130C130 130 110 130 110 130"
            stroke={colors[color as keyof typeof colors]}
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M110 40C110 40 130 40 150 40C170 40 180 60 160 80C140 100 110 100 110 100"
            stroke={colors[color as keyof typeof colors]}
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    } else if (style === "style2") {
      return (
        <svg
          id="logo-svg"
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Integrated HH Monogram */}
          <path
            d="M40 40V160M40 100H80"
            stroke={colors[color as keyof typeof colors]}
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M80 40V160"
            stroke={colors[color as keyof typeof colors]}
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M100 40C120 40 140 40 160 40C160 60 160 80 140 80C120 80 100 80 100 80"
            stroke={colors[color as keyof typeof colors]}
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M100 80C100 100 100 120 100 140C100 160 120 160 140 160C160 160 160 140 160 140"
            stroke={colors[color as keyof typeof colors]}
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M100 110H140"
            stroke={colors[color as keyof typeof colors]}
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    } else {
      return (
        <svg
          id="logo-svg"
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Flowing Calligraphic HH */}
          <path
            d="M40 40V160"
            stroke={colors[color as keyof typeof colors]}
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M40 100C60 90 80 90 100 100C120 110 140 110 160 100"
            stroke={colors[color as keyof typeof colors]}
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M100 40V160"
            stroke={colors[color as keyof typeof colors]}
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M160 40V160"
            stroke={colors[color as keyof typeof colors]}
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    }
  }

  return (
    <div className="container mx-auto py-10 space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">H.Haithem Logo Design</h1>
        <p className="text-muted-foreground">Modern & Calligraphic Fusion</p>
      </div>

      <Tabs defaultValue="style1" onValueChange={setActiveStyle} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="style1">Modern Fusion</TabsTrigger>
          <TabsTrigger value="style2">Integrated Monogram</TabsTrigger>
          <TabsTrigger value="style3">Flowing Calligraphic</TabsTrigger>
        </TabsList>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div
                  className={`flex items-center justify-center h-[300px] ${activeColor === "white" ? "bg-slate-900" : "bg-slate-100"}`}
                >
                  {renderLogo(activeStyle, activeColor)}
                </div>
              </CardContent>
            </Card>

            <div className="mt-4 flex flex-wrap gap-2">
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

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Logo Description</h2>
              {activeStyle === "style1" && (
                <p className="text-muted-foreground">
                  This design combines a structured, geometric first "H" with a flowing, calligraphic second "H". The
                  left letter maintains clean lines while the right one incorporates curved elements inspired by Arabic
                  script, creating a perfect balance between modern minimalism and elegant calligraphy.
                </p>
              )}
              {activeStyle === "style2" && (
                <p className="text-muted-foreground">
                  The integrated monogram design creates a cohesive unit where both "H" letters share visual elements.
                  The first "H" is structured with straight lines, while the second incorporates flowing curves that
                  wrap around, symbolizing the fusion of modern design with calligraphic tradition.
                </p>
              )}
              {activeStyle === "style3" && (
                <p className="text-muted-foreground">
                  This flowing calligraphic design emphasizes elegant movement with a distinctive connecting line
                  between the two "H" letters. The vertical strokes maintain structure while the horizontal connecting
                  element adds a dynamic, fluid quality inspired by Arabic calligraphy.
                </p>
              )}
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Usage Guidelines</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>The logo works best on solid backgrounds</li>
                <li>Maintain clear space around the logo equal to the height of the "H"</li>
                <li>Do not stretch or distort the proportions</li>
                <li>The SVG format allows for scaling to any size without loss of quality</li>
                <li>
                  For dark backgrounds, use the white version; for light backgrounds, use the black or colored versions
                </li>
              </ul>
            </div>

            <div className="flex gap-4">
              <Button onClick={copyToClipboard} className="flex-1">
                {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
                {copied ? "Copied!" : "Copy SVG Code"}
              </Button>
              <Button onClick={downloadSVG} variant="outline" className="flex-1">
                <Download className="mr-2 h-4 w-4" />
                Download SVG
              </Button>
            </div>
          </div>
        </div>
      </Tabs>

      <div className="mt-12 border-t pt-8">
        <h2 className="text-xl font-semibold mb-4">Additional Logo Variations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="bg-slate-900 flex items-center justify-center h-[200px] rounded-md mb-4">
                {renderLogo("style1", "white")}
              </div>
              <h3 className="font-medium">White on Dark</h3>
              <p className="text-sm text-muted-foreground">Primary logo for dark backgrounds</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="bg-white border flex items-center justify-center h-[200px] rounded-md mb-4">
                {renderLogo("style1", "black")}
              </div>
              <h3 className="font-medium">Black on Light</h3>
              <p className="text-sm text-muted-foreground">Primary logo for light backgrounds</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center h-[200px] rounded-md mb-4">
                {renderLogo("style1", "primary")}
              </div>
              <h3 className="font-medium">Colored Accent</h3>
              <p className="text-sm text-muted-foreground">For branded applications</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

