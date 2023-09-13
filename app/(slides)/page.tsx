import { ForcemContent } from "@/components/forcem/forcem-content"
import { Prose } from "@/components/slideshow/prose"
import { Slide, SlideContainer } from "@/components/slideshow/slide"
import { FadeOnVisible } from "@/components/ui/fade-on-visible"

export default function Home() {
  return (
    <SlideContainer>
      <FadeOnVisible fadeIn>
        <Slide className="content-start justify-items-center">
          <Prose>
            <h2>Any Old Type</h2>
            <ForcemContent length={3} />
          </Prose>
        </Slide>
      </FadeOnVisible>
      <FadeOnVisible fadeIn>
        <Slide className="content-start justify-items-center">
          <Prose>
            <h2>Any is bad</h2>
            <h3>Reasons why any is bad</h3>
            <ul>
              <li>Because I said so</li>
              <li>Because other people think so to</li>
            </ul>
            <h3>Stuff</h3>
            <ForcemContent length={1} />
          </Prose>
        </Slide>
      </FadeOnVisible>
      <FadeOnVisible fadeIn>
        <Slide className="content-start justify-items-center">
          <Prose>
            <h2>Conclusion</h2>
            <h3>More</h3>
            <ul>
              <li>Because I said so</li>
              <li>Because other people think so to</li>
            </ul>
          </Prose>
        </Slide>
      </FadeOnVisible>
    </SlideContainer>
  )
}
