<script module>
  export const metadata = {
    title: 'On Isomorphisms: Uniqueness of Inverses',
    type: 'note',
    date: '2026-05-03',
    summary: 'A proof that the inverse of an isomorphism is unique, with applications in groups and linear algebra.',
    tags: ['math', 'algebra', 'linear-algebra'],
    draft: false,
  };
</script>

<script lang="ts">
  import Prose from '$lib/components/Prose.svelte';
  import Callout from '$lib/components/Callout.svelte';
  import ProofTable from '$lib/components/ProofTable.svelte';
  import M from '$lib/components/Math.svelte';
  import { tex } from '$lib/utils';
</script>

<Prose>

  <Callout type="definition" title="Isomorphism">
    A function <M e={tex`f : A \to B`} /> is an <strong>isomorphism</strong> if there exists
    a function <M e={tex`g : B \to A`} /> such that
    <M e={tex`g \circ f = I_A \qquad \text{and} \qquad f \circ g = I_B`} display />
    where <M e={tex`I_A`} /> and <M e={tex`I_B`} /> denote the identity functions on
    <M e={tex`A`} /> and <M e={tex`B`} /> respectively. We call <M e={tex`g`} /> a
    <em>two-sided inverse</em> of <M e={tex`f`} />.
  </Callout>

  <Callout type="theorem" number="1" title="Uniqueness of Inverses">
    If <M e={tex`f : A \to B`} /> is an isomorphism, its two-sided inverse is unique.
  </Callout>

  <Callout type="proof">
    Suppose <M e={tex`g, h : B \to A`} /> are both two-sided inverses of <M e={tex`f`} />. Then:
    <M e={tex`g = g \circ I_B = g \circ (f \circ h) = (g \circ f) \circ h = I_A \circ h = h`} display />
  </Callout>

  <p>The same conclusion written step by step, with each justification made explicit:</p>

  <ProofTable steps={[
    {
      expr: tex`g = g \circ I_B`,
      justification: 'Identity law: composing with $I_B$ on the right is neutral'
    },
    {
      expr: tex`= g \circ (f \circ h)`,
      justification: '$h$ is a right inverse of $f$, so $f \\circ h = I_B$'
    },
    {
      expr: tex`= (g \circ f) \circ h`,
      justification: 'Associativity of function composition'
    },
    {
      expr: tex`= I_A \circ h`,
      justification: '$g$ is a left inverse of $f$, so $g \\circ f = I_A$'
    },
    {
      expr: tex`= h`,
      justification: 'Identity law: composing with $I_A$ on the left is neutral'
    },
  ]} />

  <Callout type="remark">
    This proof uses only two facts: associativity of composition and the identity
    laws. It therefore holds in any category — not just <M e={tex`\textbf{Set}`} />.
    Wherever these axioms hold, isomorphisms have unique inverses.
  </Callout>

  <h2>Application to Groups</h2>

  <Callout type="remark">
    A <em>group isomorphism</em> <M e={tex`\varphi : G \to H`} /> is a bijective group
    homomorphism. By Theorem 1, its two-sided inverse <M e={tex`\varphi^{-1} : H \to G`} />
    is unique. Moreover <M e={tex`\varphi^{-1}`} /> is itself a group homomorphism,
    since for <M e={tex`x, y \in H`} />:
    <M e={tex`\varphi^{-1}(xy) = \varphi^{-1}(x)\, \varphi^{-1}(y)`} display />
  </Callout>

  <Callout type="example" number="1" title="Klein Four-Group">
    Consider the Klein four-group <M e={tex`V_4 = \{e, a, b, c\}`} /> where every
    non-identity element has order 2, and the group
    <M e={tex`\mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}`} /> with
    componentwise addition. Define
    <M e={tex`\varphi : \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z} \to V_4`} /> by:
    <M e={tex`\varphi(0,0) = e, \quad \varphi(1,0) = a, \quad \varphi(0,1) = b, \quad \varphi(1,1) = c`} display />
    This is a group isomorphism. Its unique inverse
    <M e={tex`\varphi^{-1} : V_4 \to \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}`} /> is given by: <M e={tex`\varphi^{-1}(e) = (0,0), \quad \varphi^{-1}(a) = (1,0), \quad \varphi^{-1}(b) = (0,1), \quad \varphi^{-1}(c) = (1,1)`}  />. And by Theorem 1, we know that no other function can serve as a two-sided inverse.
  </Callout>

  <h2>Application in Linear Algebra</h2>

  <p>A useful way to look at something abstract from a real-world perspective is to translate it into linear algebra terms.</p>

  <Callout type="remark">
    A <em>linear isomorphism</em> <M e={tex`T : V \to W`} /> is a bijective linear map
    between two vector spaces. Its inverse <M e={tex`T^{-1} : W \to V`} /> is unique and is also
    linear. This follows from Theorem 1, since linear maps compose associatively and
    identity maps are linear.
  </Callout>

  <p>
    <strong>Example.</strong> Let <M e={tex`R_\theta : \mathbb{R}^2 \to \mathbb{R}^2`} />
    be (a counter-clockwise) rotation by angle <M e={tex`\theta`} />, given by the matrix:
  </p>

  <M e={tex`R_\theta = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}`} display />

  <p>
    This is a linear isomorphism for any <M e={tex`\theta`} />. Its unique inverse
    is rotation by <M e={tex`-\theta`} />:
  </p>

  <M e={tex`R_\theta^{-1} = R_{-\theta} = \begin{pmatrix} \cos\theta & \sin\theta \\ -\sin\theta & \cos\theta \end{pmatrix}`} display />

  <p>
    We verify: <M e={tex`R_\theta \circ R_{-\theta} = I`} /> and
    <M e={tex`R_{-\theta} \circ R_\theta = I`} />. By Theorem 1,
    <M e={tex`R_{-\theta}`} /> is the <em>only</em> map with this property.
  </p>

</Prose>