import payload from 'payload'
import type { CollectionConfig } from 'payload/types'

const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
  ],
  hooks: {
    afterChange: [
      async ({ doc, operation }) => {
        if (operation === 'create') {
          const { docs } = await payload.find({
            collection: 'pages',
            where: { slug: { equals: 'home' } },
            depth: 10,
          })

          const req = await payload.update({
            id: docs[0].id,
            collection: 'pages',
            data: {
              layout: docs[0].layout,
            },
            depth: 10,
          })

          console.log(req)
        }
      },
    ],
  },
}

export default Categories
