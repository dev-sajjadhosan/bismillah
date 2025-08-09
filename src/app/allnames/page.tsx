import Names from '@/app/allnames/names'
import { getAllNames } from '@/lib/getallnames'

export default async function AllNames() {
  const names = (await getAllNames()) || []
  return (
    <>
      <section className="p-11">
        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-3xl">Explore all the Name&lsquo;s</h1>
            <p className="text-sm text-light">
              Here you can find all the names of{' '}
              <strong className="text-lg">Allah</strong> and also see there
              details.
            </p>
          </div>
          <>
            <Names data={names} />
          </>
        </div>
      </section>
    </>
  )
}
