import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageSquare, Coffee, Zap } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-neon-blue border-b-4 border-black py-16">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="neo-brutal-sm bg-black p-3">
                            <Mail className="h-8 w-8 text-orange-300" />
                        </div>
                        <h1 className="font-heading text-5xl md:text-7xl font-black text-black">CONTACT</h1>
                    </div>
                    <p className="font-body text-xl md:text-2xl font-bold text-black max-w-3xl mx-auto">
                        Got questions? Complaints? Ideas? Just want to vent about the job market?
                        <br />
                        <span className="text-lg">Hit me up - I actually read these!</span>
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <Card className="neo-brutal bg-white">
                        <CardHeader>
                            <CardTitle className="font-heading text-2xl font-black text-black flex items-center gap-3">
                                <MessageSquare className="h-6 w-6" />
                                SEND A MESSAGE
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-8">
                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name" className="font-heading font-bold text-black text-sm uppercase">
                                        Your Name
                                    </Label>
                                    <Input id="name" name="name" placeholder="What should I call you?" className="neo-input" required />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email" className="font-heading font-bold text-black text-sm uppercase">
                                        Email Address
                                    </Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="your.email@example.com"
                                        className="neo-input"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="subject" className="font-heading font-bold text-black text-sm uppercase">
                                        What's This About?
                                    </Label>
                                    <Input
                                        id="subject"
                                        name="subject"
                                        placeholder="Bug report? Feature idea? Just saying hi?"
                                        className="neo-input"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message" className="font-heading font-bold text-black text-sm uppercase">
                                        Your Message
                                    </Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Spill it all here... I've got time and coffee ☕"
                                        className="neo-input h-64"
                                        required
                                    />
                                </div>

                                <Button type="submit" className="btn-neo w-full">
                                    <Zap className="h-5 w-5 mr-2" />
                                    SEND MESSAGE
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    {/* Contact Info & Personality */}
                    <div className="space-y-8">

                        {/* Response Times */}
                        <Card className="neo-brutal bg-green-300">
                            <CardHeader>
                                <CardTitle className="font-heading text-2xl font-black text-black flex items-center gap-3">
                                    <Coffee className="h-6 w-6" />
                                    RESPONSE TIMES
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-8">

                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="font-body font-bold text-black">Bug Reports:</span>
                                        <span className="font-body font-bold text-black bg-white border-2 border-black px-2 py-1 text-sm">
                                            ASAP
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-body font-bold text-black">Feature Requests:</span>
                                        <span className="font-body font-bold text-black bg-white border-2 border-black px-2 py-1 text-sm">
                                            1-2 Days
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-body font-bold text-black">General Questions:</span>
                                        <span className="font-body font-bold text-black bg-white border-2 border-black px-2 py-1 text-sm">
                                            24 Hours
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-body font-bold text-black">Job Market Rants:</span>
                                        <span className="font-body font-bold text-black bg-white border-2 border-black px-2 py-1 text-sm">
                                            Immediately
                                        </span>
                                    </div>
                                </div>
                                <div className="bg-white border-2 border-black p-4 mt-6">
                                    <p className="font-body font-semibold text-black text-sm">
                                        💡 <strong>Pro tip:</strong> I usually respond within 24 hours. If it's been longer, check your
                                        spam folder or send another one - sometimes the internet eats emails.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* What to Expect */}
                        <Card className="neo-brutal bg-purple-300">
                            <CardHeader>
                                <CardTitle className="font-heading text-2xl font-black text-black flex items-center gap-3">
                                    <Coffee className="h-6 w-6" />
                                    WHAT TO EXPECT
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-8">
                                <div className="space-y-3 font-body font-semibold text-black">
                                    <div className="flex items-start gap-3">
                                        <span className="text-lg">🤖</span>
                                        <p>No automated responses - you're talking to a real human</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-lg">💬</span>
                                        <p>Honest, straightforward answers (sometimes brutally so)</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-lg">🚀</span>
                                        <p>If it's a good idea, I'll probably build it</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-lg">☕</span>
                                        <p>Responses powered by coffee and genuine care</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <div className="bg-black text-white p-8 neo-brutal inline-block">
                        <h3 className="font-heading text-2xl font-black mb-4">PREFER TO SKIP THE FORM?</h3>
                        <p className="font-body font-bold mb-6">
                            Just shoot me an email directly. I promise I read every single one.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="mailto:hello@jobraptor.dev" className="btn-neo-secondary">
                                <Mail className="h-5 w-5 mr-2" />
                                EMAIL ME DIRECTLY
                            </a>
                            <Link href="/about" className="btn-neo-accent">
                                READ MY STORY
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
