import * as Types from '../src/types/types'
import * as Icon from '../src/icon_cloud'
import {hex2rgb} from '@csstools/convert-colors'
import react from 'simple-icons/icons/react'

it('should transform simple icon slugs', () => {
  const tags: Types.IconTag[] = [
    {
      id: 'react',
      simpleIcon: react,
    },
    {
      id: 'js',
      simpleIcon: react
    },
    {
      id: 'ts',
      simpleIcon: react
    }
  ]

  const tags2 = Icon.getTags({
    tags,
    bgColor: '#000',
    fallbackColor: '#fff',
    size: 24,
    minContrast: 1
  })

  console.log(tags2)
})

it.only('converts hex to rgb', () => {
  const js = '#F7DF1E'

  const test = hex2rgb(js)

  const test2 = test.map((percent: any) => Math.round((percent / 100) * 255))

  console.log(test2)
})