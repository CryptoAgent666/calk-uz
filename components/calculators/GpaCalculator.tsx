'use client'

import { useState } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

const GRADES: Record<string, number> = { 'A+': 4.0, 'A': 4.0, 'A-': 3.7, 'B+': 3.3, 'B': 3.0, 'B-': 2.7, 'C+': 2.3, 'C': 2.0, 'C-': 1.7, 'D+': 1.3, 'D': 1.0, 'F': 0 }

export default function GpaCalculator() {
  const locale = useLocale()
  const [subjects, setSubjects] = useState([{ name: '', grade: 'A', credits: '3' }, { name: '', grade: 'B+', credits: '3' }, { name: '', grade: 'A-', credits: '4' }])

  const addSubject = () => setSubjects([...subjects, { name: '', grade: 'A', credits: '3' }])
  const removeSubject = (i: number) => setSubjects(subjects.filter((_, idx) => idx !== i))
  const updateSubject = (i: number, field: string, value: string) => {
    const updated = [...subjects]
    updated[i] = { ...updated[i], [field]: value }
    setSubjects(updated)
  }

  const gpa = (() => {
    let totalPoints = 0, totalCredits = 0
    subjects.forEach(s => {
      const credits = parseInt(s.credits) || 0
      const points = GRADES[s.grade] ?? 0
      totalPoints += points * credits
      totalCredits += credits
    })
    return totalCredits > 0 ? totalPoints / totalCredits : 0
  })()

  const t = locale === 'uz'
    ? { grade: 'Baho', credits: 'Kreditlar', addSubject: 'Fan qo\'shish', gpa: 'O\'rtacha ball (GPA)', remove: 'O\'chirish' }
    : { grade: 'Оценка', credits: 'Кредиты', addSubject: 'Добавить предмет', gpa: 'Средний балл (GPA)', remove: 'Удалить' }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          {subjects.map((s, i) => (
            <div key={i} className="flex gap-2 items-end">
              <div className="flex-1">
                <select value={s.grade} onChange={(e) => updateSubject(i, 'grade', e.target.value)} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  {Object.keys(GRADES).map(g => <option key={g} value={g}>{g} ({GRADES[g].toFixed(1)})</option>)}
                </select>
              </div>
              <div className="w-20">
                <Input type="number" value={s.credits} onChange={(e) => updateSubject(i, 'credits', e.target.value)} min={1} max={10} />
              </div>
              <button onClick={() => removeSubject(i)} className="text-destructive text-sm px-2 py-2 hover:underline">&times;</button>
            </div>
          ))}
          <button onClick={addSubject} className="w-full py-2 text-sm text-primary hover:underline">+ {t.addSubject}</button>
        </CardContent>
      </Card>

      <Card className="border-primary/30">
        <CardContent className="pt-6 text-center">
          <p className="text-sm text-muted-foreground">{t.gpa}</p>
          <p className="text-4xl font-bold text-primary mt-2">{gpa.toFixed(2)}</p>
          <div className="mt-2">
            <Badge variant={gpa >= 3.5 ? 'default' : gpa >= 2.5 ? 'secondary' : 'destructive'}>
              {gpa >= 3.5 ? 'Cum Laude' : gpa >= 3.0 ? 'Good' : gpa >= 2.0 ? 'Satisfactory' : 'Below Average'}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
