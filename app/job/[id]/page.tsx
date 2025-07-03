"use client"

import { useEffect, useState } from "react"
import { InlineEditable } from "@/components/ui/editable/inline-editable"
import { EditableTextarea } from "@/components/ui/editable/textarea"
import { updateJobField } from "@/lib/actions/jobs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, MapPin, DollarSign, Calendar, User } from "lucide-react"
import { STATUS_OPTIONS } from "@/lib/config/job-status"
import { type DbJob } from "@/lib/db/schema"
import { getJob } from "@/lib/actions/jobs"
import { notFound } from "next/navigation"

interface JobDetailPageProps {
    params: Promise<{ id: string }>
}

export default function ComprehensiveDemo({ params }: JobDetailPageProps) {
    const [job, setJob] = useState<DbJob | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const jobData = await getJob((await params).id)
                if (!jobData) {
                    notFound()
                }
                setJob(jobData)
            } catch (error) {
                console.error('Error fetching job:', error)
                notFound()
            } finally {
                setIsLoading(false)
            }
        }

        fetchJob()
    }, [params])

    if (isLoading) {
        return <div className="p-8 text-center">Loading...</div>
    }

    if (!job) {
        notFound()
    }

    const handleFieldUpdate = async (field: keyof DbJob, value: string) => {
        // Optimistic update
        setJob((prev) => {
            if (!prev) return null;
            return { ...prev, [field]: value };
        })

        try {
            await updateJobField(job.id, field, value)
        } catch (error) {
            // Revert on error
            setJob((prev) => {
                if (!prev) return null;
                return { ...prev, [field]: job[field] };
            })
            throw error
        }
    }

    const getStatusVariant = (status: string) => {
        switch (status.toLowerCase()) {
            case "interested":
                return "default"
            case "applied":
                return "blue"
            case "phone screen":
            case "technical interview":
            case "final interview":
                return "orange"
            case "offer":
                return "green"
            case "rejected":
            case "withdrawn":
                return "default"
            default:
                return "default"
        }
    }

    return (
        <div className="max-w-6xl mx-auto p-8 space-y-8">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold">Job Application Tracker</h1>
                <p className="text-gray-600">
                    Comprehensive demo showing both inline editing and textarea components working together
                </p>
            </div>

            <div className="grid gap-8">
                {/* Header Section */}
                <Card>
                    <CardHeader>
                        <div className="space-y-4">
                            <div className="flex items-start justify-between">
                                <div className="space-y-2 flex-1">
                                    <InlineEditable
                                        value={job.title}
                                        onSave={(value) => handleFieldUpdate("title", value)}
                                        placeholder="Job title..."
                                        className="text-2xl font-bold border-none bg-transparent px-0 hover:bg-gray-50"
                                        debounceMs={1500}
                                    />
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Building2 className="h-4 w-4" />
                                        <InlineEditable
                                            value={job.company}
                                            onSave={(value) => handleFieldUpdate("company", value)}
                                            placeholder="Company name..."
                                            className="border-none bg-transparent px-0 hover:bg-gray-50"
                                        />
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <InlineEditable
                                        value={job.status}
                                        onSave={(value) => handleFieldUpdate("status", value)}
                                        options={STATUS_OPTIONS}
                                        variant={getStatusVariant(job.status)}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <MapPin className="h-4 w-4" />
                                    <span className="font-medium">Location:</span>
                                    <InlineEditable
                                        value={job.location}
                                        onSave={(value) => handleFieldUpdate("location", value)}
                                        placeholder="Location..."
                                        className="border-none bg-transparent px-0 hover:bg-gray-50"
                                    />
                                </div>

                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <DollarSign className="h-4 w-4" />
                                    <span className="font-medium">Salary:</span>
                                    <InlineEditable
                                        value={job?.salary || ""}
                                        onSave={(value) => handleFieldUpdate("salary", value)}
                                        placeholder="Salary range..."
                                        className="border-none bg-transparent px-0 hover:bg-gray-50"
                                    />
                                </div>
                            </div>
                        </div>
                    </CardHeader>
                </Card>

                {/* Details Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Job Description</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <EditableTextarea
                                    value={job?.description || ""}
                                    onSave={(value: string) => handleFieldUpdate("description", value)}
                                    placeholder="Enter job description..."
                                    maxLength={2000}
                                    minRows={4}
                                    maxRows={8}
                                    truncateLength={200}
                                    debounceMs={2000}
                                />
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">


                        <Card>
                            <CardHeader>
                                <CardTitle>Notes</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <EditableTextarea
                                    value={job?.notes || ""}
                                    onSave={(value: string) => handleFieldUpdate("notes", value)}
                                    placeholder="Add your notes about this position..."
                                    minRows={3}
                                    maxRows={6}
                                    truncateLength={150}
                                    debounceMs={1500}
                                />
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Quick Actions */}
                <Card>
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <button
                                onClick={() => handleFieldUpdate("status", "Phone Screen")}
                                className="p-3 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                Schedule Phone Screen
                            </button>
                            <button
                                onClick={() => handleFieldUpdate("status", "Technical Interview")}
                                className="p-3 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                Technical Interview
                            </button>
                            <button
                                onClick={() => handleFieldUpdate("status", "Withdrawn")}
                                className="p-3 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-red-600 border-red-200 hover:bg-red-50"
                            >
                                Withdraw Application
                            </button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
