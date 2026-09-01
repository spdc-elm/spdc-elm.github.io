type Element = {
  type: 'element'
  tagName: string
  properties?: Record<string, unknown>
  children?: unknown[]
}

type Parent = { children?: unknown[] }

/** Turn Markdown images with alt text into simple, centered figure captions. */
export default function rehypeFigureCaptions() {
  return (tree: Parent) => {
    const walk = (parent: Parent) => {
      if (!parent.children) return
      const next: unknown[] = []
      for (const child of parent.children) {
        if (!child || typeof child !== 'object') {
          next.push(child)
          continue
        }
        const node = child as Partial<Element> & Parent
        if (node.type === 'element' && node.tagName === 'img') {
          const alt = typeof node.properties?.alt === 'string' ? node.properties.alt : ''
          if (alt.trim()) {
            next.push({
              type: 'element',
              tagName: 'figure',
              properties: {},
              children: [
                node,
                { type: 'element', tagName: 'figcaption', properties: {}, children: [{ type: 'text', value: alt }] },
              ],
            })
            continue
          }
        }
        walk(node)
        next.push(node)
      }
      parent.children = next
    }
    walk(tree)
  }
}
