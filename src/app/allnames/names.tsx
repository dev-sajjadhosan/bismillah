'use client'

import CardComponent from '@/components/base/CardComp'
import TooltipBtn from '@/components/base/TooltipBtn'
import { Input } from '@/components/ui/input'
import {
  SelectItem,
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { NamesDoc } from '@/lib/getallnames'
import { LayoutGrid, LayoutList } from 'lucide-react'
import { useMemo, useState } from 'react'

export default function Names({ data }: { data: NamesDoc[] }) {
  const [search, setSearch] = useState('')
  const [isGrid, setIsGrid] = useState(true)

  const normalize = (str: string) => {
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[-_]/g, '')
      .trim()
  }

  const filterData = useMemo(() => {
    const searchTerm = search.trim().toLowerCase()
    if (!searchTerm) return data

    return data.filter((name) => {
      if (!name.transliteration) return false
      const normal = normalize(name.transliteration)
      const includes = normal.includes(searchTerm)
      return includes
    })
  }, [search, data])

  return (
    <>
      <div className="my-15 flex flex-col md:flex-row gap-9 items-center justify-between w-full">
        <Input
          type="search"
          placeholder="Search name here"
          className="w-xs border-0"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <TooltipBtn
              title="Grid"
              icon={<LayoutGrid />}
              variant={isGrid ? 'default' : 'ghost'} // Active when isGrid true
              action={() => setIsGrid(true)}
            />
            <TooltipBtn
              title="List"
              icon={<LayoutList />}
              variant={!isGrid ? 'default' : 'ghost'} // Active when isGrid false
              action={() => setIsGrid(false)}
            />
          </div>
          <Select>
            <SelectTrigger className="w-[155px]">
              <SelectValue placeholder="Filter by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asc">A - Z</SelectItem>
              <SelectItem value="desc">a - z</SelectItem>
              <SelectItem value="popular">Popular</SelectItem>
              <SelectItem value="view">Most View</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[175px]">
              <SelectValue placeholder="Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Names</SelectItem>
              <SelectItem value="merciful">Merciful Attributes</SelectItem>
              <SelectItem value="majestic">Majestic Attributes</SelectItem>
              <SelectItem value="provider">Provider Attributes</SelectItem>
              <SelectItem value="forgiving">Forgiving Attributes</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div
        className={`mt-17 grid ${
          isGrid ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'
        }  gap-5 w-full`}
      >
        {filterData.map((l, i) => (
          <CardComponent key={i} l={l} isGrid={isGrid} />
        ))}
      </div>
    </>
  )
}
