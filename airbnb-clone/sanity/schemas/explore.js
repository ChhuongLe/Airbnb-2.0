import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'explore',
  title: 'Explore',
  type: 'document',
  fields: [
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'distance',
      title: 'Distance',
      type: 'string',
    }),
    defineField({
      name:'image',
      title:'Image',
      type:'url'
    })
  ]
})
