// @/app/dev/page.tsx

"use client"

import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import {
  ArrowUp,
  ArrowDown,
  Edit3,
  Trash2,
} from "lucide-react"

type HelpDevItem = {
  id: string
  title?: string | null
  section: any[]
  order: number
  parentId?: string | null
}

export default function HelpDevPage() {
  const [items, setItems] = useState<HelpDevItem[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [openDialog, setOpenDialog] = useState(false)
  const [editingItem, setEditingItem] = useState<HelpDevItem | null>(null)
  const [formTitle, setFormTitle] = useState("")
  const [formSection, setFormSection] = useState("[]")
  const [formOrder, setFormOrder] = useState(0)

  async function fetchHelpDev() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch("/api/helpdev")
      if (!res.ok) throw new Error("Erreur chargement")
      const data = await res.json()
      setItems(data)
    } catch (e: any) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchHelpDev()
  }, [])

  function openCreateDialog() {
    setEditingItem(null)
    setFormTitle("")
    setFormSection("[]")
    setFormOrder(0)
    setOpenDialog(true)
  }

  function openEditDialog(item: HelpDevItem) {
    setEditingItem(item)
    setFormTitle(item.title || "")
    setFormSection(JSON.stringify(item.section, null, 2))
    setFormOrder(item.order)
    setOpenDialog(true)
  }

  async function handleSave() {
    let parsedSection: any[] = []
    try {
      parsedSection = JSON.parse(formSection)
      if (!Array.isArray(parsedSection))
        throw new Error("Le champ Section doit être un tableau JSON")
    } catch (e: any) {
      alert("Format JSON invalide dans Section : " + e.message)
      return
    }

    const body = {
      title: formTitle,
      section: parsedSection,
      order: formOrder,
      parentId: editingItem?.parentId || null,
    }

    const url = editingItem ? `/api/helpdev/${editingItem.id}` : "/api/helpdev"
    const method = editingItem ? "PUT" : "POST"

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
      if (!res.ok) throw new Error("Échec sauvegarde")
      setOpenDialog(false)
      fetchHelpDev()
    } catch (e: any) {
      alert(e.message)
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Confirmer la suppression ?")) return
    try {
      const res = await fetch(`/api/helpdev/${id}`, { method: "DELETE" })
      if (!res.ok) throw new Error("Échec suppression")
      fetchHelpDev()
    } catch (e: any) {
      alert(e.message)
    }
  }

  async function handleReorder(id: string, direction: "up" | "down") {
    try {
      const res = await fetch(`/api/helpdev/reorder`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, direction }),
      })
      if (!res.ok) throw new Error("Échec de réorganisation")
      fetchHelpDev()
    } catch (e: any) {
      alert(e.message)
    }
  }

  // Affichage items triés par ordre
  const sortedItems = items.slice().sort((a, b) => a.order - b.order)

  return (
    <section className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Gestion HelpDev</h1>

      <Button onClick={openCreateDialog} className="mb-4">
        Créer une entrée
      </Button>

      {loading && <p>Chargement...</p>}
      {error && <p className="text-red-600">Erreur : {error}</p>}

      <div className="space-y-4">
        {sortedItems.length === 0 && !loading && <p>Aucune entrée.</p>}
        {sortedItems.map((item, idx) => (
          <div
            key={item.id}
            className="p-4 border rounded flex justify-between items-center bg-gray-50"
          >
            <div>
              <h2 className="font-semibold">{item.title || "(Sans titre)"}</h2>
              <p className="text-sm text-gray-600">Ordre : {item.order}</p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleReorder(item.id, "up")}
                disabled={idx === 0}
                aria-label="Monter ordre"
                className="p-1 hover:text-indigo-600 disabled:opacity-40"
              >
                <ArrowUp size={18} />
              </button>
              <button
                onClick={() => handleReorder(item.id, "down")}
                disabled={idx === sortedItems.length - 1}
                aria-label="Descendre ordre"
                className="p-1 hover:text-indigo-600 disabled:opacity-40"
              >
                <ArrowDown size={18} />
              </button>
              <button
                onClick={() => openEditDialog(item)}
                aria-label="Modifier"
                className="p-1 hover:text-green-600"
              >
                <Edit3 size={18} />
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                aria-label="Supprimer"
                className="p-1 hover:text-red-600"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>
              {editingItem ? "Modifier HelpDev" : "Créer HelpDev"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-2">
            <div>
              <label
                htmlFor="title"
                className="block font-medium mb-1"
              >
                Titre
              </label>
              <Input
                id="title"
                value={formTitle}
                onChange={(e) => setFormTitle(e.target.value)}
                placeholder="Titre optionnel"
              />
            </div>
            <div>
              <label
                htmlFor="section"
                className="block font-medium mb-1"
              >
                Section (JSON tableau)
              </label>
              <Textarea
                id="section"
                rows={6}
                value={formSection}
                onChange={(e) => setFormSection(e.target.value)}
                className="font-mono text-sm"
                placeholder='Ex: [{"type":"text","content":"..."}]'
              />
            </div>
            <div>
              <label
                htmlFor="order"
                className="block font-medium mb-1"
              >
                Ordre
              </label>
              <Input
                id="order"
                type="number"
                value={formOrder}
                onChange={(e) => setFormOrder(Number(e.target.value))}
              />
            </div>
          </div>
          <DialogFooter className="mt-4 flex justify-end gap-3">
            <Button
              variant="outline"
              onClick={() => setOpenDialog(false)}
            >
              Annuler
            </Button>
            <Button onClick={handleSave}>
              {editingItem ? "Enregistrer" : "Créer"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}
