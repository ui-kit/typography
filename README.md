# typography

Scaled typography for ESS

## Usage

You can use it out of the box

    import 'ui-kit-typography/index.ess'

and optionally configure it in your root

    {
      typographyBase: 15,
      typographyMargins: false,
      typographyRange: 'h1 h2 h3 p',
      typographyScale: 1.1
    }

### Skin

You can pass values into `index.ess` as well, turning it into a skin

    .skin
      %../index.ess(scale=1.25 range='&-h1 &-h2 &-h3 &-h4 &-p' ignoreBody)

yields

    .skin-h1 {
      font-size: 2.9rem;
    }
    .skin-h2 {
      font-size: 2.3rem;
    }
    .skin-h3 {
      font-size: 1.9rem;
    }
    .skin-h4 {
      font-size: 1.5rem;
    }
    .skin-p {
      font-size: 1.2rem;
    }

### Extend

You can extend values in your range with `extend.ess`

    .big
      %ui-kit-typography/extend.ess(h1)

    // or

    .big
      %ui-kit-typography/extend.ess(at='h1')

yields

    .big {
      font-size: 3.4rem;
    }

### Raw Function

A raw function is useful is you want to create quick one-off scales

    function SizeScale(args)
      var range = 'big medium small'
      each r in range.split(' ')
        &-`r`
          %../extend.ess(at=r scale=args.scale along=args.along range=range mid=1 margins='none')

    .heading
      SizeScale(scale=1.25 along=2)

    .paragraph
      SizeScale(scale=1.15 along=1)

yields

    .heading-big {
      font-size: 3.1rem;
    }
    .heading-medium {
      font-size: 2.5rem;
    }
    .heading-small {
      font-size: 2rem;
    }

    .paragraph-big {
      font-size: 1.3rem;
    }
    .paragraph-medium {
      font-size: 1.2rem;
    }
    .paragraph-small {
      font-size: 1rem;
    }

### Dynamic

You can even use it dynamically in Jade, as shown in the demo. The API is the same as ESS, so you can do something as simple as

    import Typography from 'ui-kit-typography/index.ess?dynamic'
    
    Typography(scale=1.05 range='.Foo-h1 .Foo-h2 .Foo-h3 .Foo-h4'})

## Variables

- `base`: the base font, applied to the html selector (default: 12)
- `range`: a string of selectors which will receive the calculated properties (default: 'h1 h2 h3 h4 h5 h6 h7 h8 p small')
- `scale`: the ratio by which to size up or down the range (default: 1.125)
- `along`: multiplied with `base` (to keep `rem` sane), then used to weight the scale (default: 1.5)
- `round`: how much to round the calculated properties. For example, with a value of 1000, a property of 3.33333333333 will be rounded to 3.333 (default: 10)
- `mid`: which index in the range to use as the center of the scale (default: 2)
- `ignoreBody`: when set to `true`, the `index.ess` will not apply styles to `html` or `body` (default: undefined)

## License

MIT
