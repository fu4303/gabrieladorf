import React from 'react'
import Header from '../components/article/header'
import ContentWrapper from '../components/article/contentwrapper'
import Footer from '../components/footer'

import CoverImage from '../components/article/coverimage'
import LargeImage from '../components/article/largeimage'
import TwoImage from '../components/article/twoimage'
import FullSizeImage from '../components/article/fullsizeimage'

import PalettteCoverImage from '../img/articles/palettteapp/palettteapp.jpg'
import PalettteImage1 from '../img/articles/palettteapp/palettte1.jpg'
import PalettteImage2 from '../img/articles/palettteapp/palettte2.jpg'
import PalettteImage3 from '../img/articles/palettteapp/palettte3.jpg'
import PalettteImage4 from '../img/articles/palettteapp/palettte4.jpg'

function Bam() {
  return (
    <div>
      <Header title="Palettte App" />
      <CoverImage src={PalettteCoverImage} focusX={'50%'} focusY={'0%'} />
      <ContentWrapper>
        <h2 id="toc_0">Build, analyze and edit smooth color schemes</h2>
        <h3>Why yet another color palette tool?</h3>
        <p>
          Most existing apps generate new color schemes based on different
          geometrical concepts such as complementary colors or colors that are
          layed out in a triangle or another shape in a certain color space. The
          resulting color schemes might be suitable for logos or classic graphic
          design, but they rarely work for UI Design, where most of the time you
          need to work with a few base colors - that are often set by brand
          guidelines - and a whole range of different variations and shades.
        </p>

        <p>
          Steve Schoger describes the creation of such a color palette quite
          well:
          <br />
          <a href="https://refactoringui.com/previews/building-your-color-palette/">
            Building your color palette
          </a>
        </p>
        <p>
          Another great article about this is from Eric Kennedy:
          <br />
          <a href="https://learnui.design/blog/color-in-ui-design-a-practical-framework.html">
            Color in UI Design - a practical Framework
          </a>
        </p>
        <p>
          What Steve doesn't describe exactly is how he finds those colors:
          <i>
            "...you just need to fill in the gaps in between", "Trust your eyes,
            not the numbers."
          </i>
        </p>

        <p>This is where palettte app comes into play:</p>
        <p>
          <ul>
            <li>
              Build <b>smooth color schemes</b> that flow from one color to
              another
            </li>
            <li>
              <b>Finetune hue, saturation value gradients</b> of your palette
              and of each color swatch individually
            </li>
            <li>
              Import and analyze and <b>edit existing color schemes</b>, find
              errors or automatically find the most similar colors from a new
              palette to a list of legacy colors from your codebase
            </li>
          </ul>
        </p>
        <br />
        <h3>Building a new color palette</h3>
        <p>
          To create a new color palette, click on the plus icon in the left
          sidebar and delete all sample colors by clicking on backspace. You can
          now add your base color by clicking "add swatch" and enter the
          HEX-Value in the right sidebar.
        </p>
        <p>
          When adding more swatches you can see that three curves form: one for
          the hue, one for the saturation and one for the value (=brightness) of
          the colors.
        </p>
        <LargeImage src={PalettteImage2} />
        <p>
          A basic palette for UI Design consists of 8-10 shades where the hue
          stays the same for all shades, the value goes up and the saturation
          goes down as the colors get lighter.
        </p>
        <h3>Analyzing and editing existing color palettes</h3>
        <p>
          If you already have a color palette and you want to know if it can be
          optimized, import the colors one by one or write the palette down in
          the special JSON format (example can be seen whan clicking on import)
          and batch import your palette.
        </p>
        <p>
          Here is the palette Steve Schoger uses in his example in Refactoring
          UI:
        </p>
        <LargeImage src={PalettteImage3} />
        <p>
          As you can see there is a little ditch in the value envelope curve and
          the saturation curve is round in the beginning and falls off in a
          linear way suddenly, nothing too serious but it's clear that Steve has
          chosen his colors by "trusting his eyes" and not his numbers ;).
        </p>
        <p>
          You can edit lines by dragging the handles around or by selecting two
          handles and clicking on "interpolate" (only linear interpolation is
          supported at the moment).
        </p>
        <LargeImage src={PalettteImage4} />
        <p>
          When you are happy with your edit, simply export your new colors
          again.
        </p>

        <br />
        <h3>Map old colors to new ones</h3>
        <p>
          You will often somehow find yourself in a situation where you have
          built a wonderful new color color palette - but your legacy code does
          not reflect the beauty of it as a lot of different shades and colors
          have piled up over time.
        </p>
        <p>
          With palettte app, you can import those (legacy) colors and find
          the most similar colors from your new palettes automatically. You will
          also immediatly spot when colors are too far off, and you need to
          introduce more colors in your palettes.
        </p>
        <LargeImage src={PalettteImage1} />
        <p>
          It's also useful if you want to add shades to your palette and rename
          all existing colors.
        </p>
        <br />
        <h3>Feedback welcome</h3>
        <p>
          If you have ideas how to make this tool better, please let me know via{' '}
          <a href="https://twitter.com/gabdorf">Twitter</a>.
        </p>
      </ContentWrapper>
      <Footer />
    </div>
  )
}

export default Bam