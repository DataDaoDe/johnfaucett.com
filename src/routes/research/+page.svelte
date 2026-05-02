<script lang="ts">
  import Math from '$lib/components/Math.svelte';
  import Prose from '$lib/components/Prose.svelte';
  import Callout from '$lib/components/Callout.svelte';
	import { tex } from '$lib/utils';
</script>

<main class="max-w-2xl mx-auto px-8 py-16">
  <h1 class="font-display text-4xl text-ink dark:text-ink-dark mb-2">Research</h1>
  <p class="font-mono text-xs tracking-widest uppercase text-ink-faint dark:text-ink-dark-faint mb-16">§ 02</p>

  <Prose>
    <p>
      One of the most beautiful results in analysis is the closed form
      of the Gaussian integral.
    </p>
  </Prose>

  <Callout type="definition" title="The Gaussian Integral">
    Let <Math expression={tex`I = \int_{-\infty}^{\infty} e^{-x^2} dx`} />. We claim that <Math expression={tex`I = \sqrt{\pi}`} />.
  </Callout>

  <Callout type="theorem" number="1.3" title="Gaussian Integral">
    <Math expression={tex`\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}`} display />
  </Callout>

  <Callout type="proof">
    Square the integral and convert to polar coordinates.
    <Math expression={tex`I^2 = \int_0^{2\pi}\int_0^{\infty} e^{-r^2} r\, dr\, d\theta = \pi`} display />
    Taking the positive square root gives <Math expression={tex`I = \sqrt{\pi}`} />.
  </Callout>

  <Callout type="remark">
    This result is fundamental to the normalization of the Gaussian distribution.
  </Callout>

  <Callout type="example" title="Normal Distribution">
    The probability density <Math expression={tex`f(x) = \frac{1}{\sqrt{2\pi}} e^{-x^2/2}`} /> integrates to 1
    over <Math expression={tex`\mathbb{R}`} /> by the Gaussian integral.
  </Callout>

  <Callout type="corollary">
    <Math expression={tex`\int_{-\infty}^{\infty} e^{-x^2/2} dx = \sqrt{2\pi}`} display />
  </Callout>
</main>