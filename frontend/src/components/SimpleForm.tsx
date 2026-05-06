import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SimpleFormProps } from "@/types/form.type";
import { Upload } from "lucide-react";
import { ChangeEvent, FormEvent, ReactEventHandler, useState } from "react";

interface SimpleFormInterface {
    title?: string,
    formEntries: SimpleFormProps[],
    onSubmit: (e: FormEvent<HTMLFormElement>) => void,
    loading?: boolean,
    fileHandler?: (files: FileList | null) => void,
    files?: FileList
}

export default function SimpleForm({ title, formEntries, onSubmit, loading, files, fileHandler }: SimpleFormInterface) {

    return (
        <div className="bg-card border border-border rounded-md p-8 shadow-[var(--shadow-card)]">
            <h3 className="font-display text-xl font-semibold mb-6">{title || ''}</h3>
            <form onSubmit={(e) => onSubmit(e)} className="space-y-5">
                {
                    formEntries.map((entry) =>
                        entry.isTextArea ? (
                            <div className="space-y-2">
                                <Label htmlFor={entry.label}>{entry.htmlFor} { entry.isRequired && '*'}</Label>
                                <Textarea id={entry.label} name={entry.label} rows={4} required maxLength={1000} />
                            </div>

                        ) : entry.isFileUpload ? (
                            <div className="space-y-2">
                                <Label htmlFor={entry.label}>{entry.htmlFor} { entry.isRequired && '*'}</Label>
                                <label
                                    htmlFor={entry.label}
                                    className="flex flex-col items-center justify-center border-2 border-dashed border-border rounded-md py-8 cursor-pointer hover:border-accent hover:bg-secondary transition-colors"
                                >
                                    <Upload className="w-8 h-8 text-accent mb-2" />
                                    <span className="text-sm text-muted-foreground">
                                        {files && files.length > 0 ? `${files.length} archivo(s) seleccionados` : "Haz clic para seleccionar archivos PDF"}
                                    </span>
                                    <input
                                        id={entry.label}
                                        type="file"
                                        multiple
                                        accept=".pdf"
                                        className="hidden"
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => { if (fileHandler) fileHandler(e.target.files) }}
                                    />
                                </label>
                            </div>
                        ) : (
                            <div className="space-y-2">
                                <Label htmlFor={entry.label}>{entry.htmlFor} { entry.isRequired && '*'}</Label>
                                <Input id={entry.label} name={entry.label} />
                            </div>

                        )
                    )
                }
                <Button type="submit" disabled={loading} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground uppercase tracking-wider font-semibold">
                    {loading ? "Enviando..." : "Enviar mensaje"}
                </Button>
            </form>
        </div>
    )
}