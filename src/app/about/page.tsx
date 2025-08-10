import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { AlertCircleIcon, AudioWaveform, BellRing, BrainCog, Search } from 'lucide-react'

export default function About() {
  return (
    <>
      <section className="p-9 max-w-4xl mx-auto">
        <Card className="items-center justify-center text-center w-full md:w-3xl h-[17rem] mx-auto border-0 bg-transparent">
          <CardContent>
            <h1 className="text-5xl">Bismillah</h1>
            <p className="tracking-wide mt-2">
              where you can find
              <Badge variant="outline" className="text-md">
                <strong> Allah </strong>
              </Badge>
              names and know about them -- what the{' '}
              <Badge variant="outline"> meaning </Badge> of the name, what can
              it <Badge variant="outline">do</Badge> or what{' '}
              <Badge variant="outline">benefit</Badge> can i get ?
            </p>
          </CardContent>
        </Card>
        <div className="my-13">
          <Card className='p-9 text-center border-0 bg-transparent'>
            <CardHeader>
                <h3 className="text-2xl text-center">About this page</h3>
            </CardHeader>
            <CardContent>
              <p className="font-light tracking-wide">
                This isn’t just a feature page — it’s a guided experience into
                the divine.  Here, you’ll explore the 99 Beautiful Names of
                Allah ﷻ like never before — with clarity, reflection, and modern
                simplicity.
                <br />
                Each Name is more than just a sound or script.  It’s a pathway —
                to deeper understanding, to spiritual healing, to strengthening
                your bond with the Creator.
              </p>
            </CardContent>
          </Card>
          <div className="m-17 space-y-5">
            <Alert variant="default">
              <Search />
              <AlertTitle>Browse with Meaning.</AlertTitle>
              <AlertDescription>
                <ul className="list-inside list-disc text-sm">
                  <li>
                    View all 99 Names in Arabic with clean transliteration and
                    English/Bangla meanings.
                  </li>
                  <li>
                    Instantly access the core essence of each Name — without
                    confusion or complexity.
                  </li>
                </ul>
              </AlertDescription>
            </Alert>
            <Alert variant="default">
              <AlertCircleIcon />
              <AlertTitle>Reflect with Purpose</AlertTitle>
              <AlertDescription>
                <ul className="list-inside list-disc text-sm">
                  <li>
                    Thoughtful reflections and real-life connections for each
                    Name.
                  </li>
                  <li>
                    Understand how attributes like Ar-Rahman or Al-Ghaffar apply
                    to your everyday struggles and joys.
                  </li>
                </ul>
              </AlertDescription>
            </Alert>
            <Alert variant="default">
              <BrainCog />
              <AlertTitle>Listen, Recite, and Memorize</AlertTitle>
              <AlertDescription>
                <ul className="list-inside list-disc text-sm">
                  <li>
                    (Optional feature) Audio recitations with proper tajweed.
                  </li>
                  <li>
                    Loop mode, play-by-name, or continuous dhikr-style
                    recitation — designed for spiritual focus
                  </li>
                </ul>
              </AlertDescription>
            </Alert>
            <Alert variant="default">
              <AudioWaveform />
              <AlertTitle>Go Deeper with Benefits</AlertTitle>
              <AlertDescription>
                <ul className="list-inside list-disc text-sm">
                  <li>
                    Discover the virtues of each Name: spiritually, mentally,
                    and practically.
                  </li>
                  <li>Learn duas that include or invoke these Names.</li>
                  <li>
                    Qur’anic references, so you can connect text to revelation.
                  </li>
                </ul>
              </AlertDescription>
            </Alert>
            <Separator/>
            <Alert variant="destructive">
              <BellRing />
              <AlertTitle>Coming Soon</AlertTitle>
              <AlertDescription>
                <ul className="list-inside list-disc text-sm">
                  <li>Some new cool features coming</li>
                </ul>
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>
    </>
  )
}
