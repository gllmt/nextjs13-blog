import Link from "next/link"
import PaddingContainer from "../layout/padding-container"

const Navigation = () => {
  return (
    <div className="sticky border-b top-0 z-[999] left-0 bg-white bg-opacity-5 backdrop-blur-md">
        <PaddingContainer>
            <div className="flex items-center justify-between py-5">
                <Link className="text-lg font-bold" href="/">Explorer</Link>
                {/* Category Links */}
                <nav>
                    <ul className="flex items-center gap-4 text-neutral-600">
                        <li>
                            <Link href="/cities">Cities</Link>
                        </li>
                        <li>
                            <Link href="/experiences">Experiences</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </PaddingContainer>
    </div>
  )
}

export default Navigation