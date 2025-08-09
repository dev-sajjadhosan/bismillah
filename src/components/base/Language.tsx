import TooltipBtn from '@/components/base/TooltipBtn'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Languages } from 'lucide-react'

export default function Language() {
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <TooltipBtn
            variant="ghost"
            side="bottom"
            title="Language"
            icon={<Languages size={15} />}
          />
        </PopoverTrigger>
        <PopoverContent className="w-54 mt-3">
          <p className="text-sm mb-2">Languages</p>
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem defaultChecked value="eng" id="option-one" />
              <Label htmlFor="option-one">English</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="ben" id="option-two" />
              <Label htmlFor="option-two">Bangla</Label>
            </div>
          </RadioGroup>
        </PopoverContent>
      </Popover>
    </>
  )
}
