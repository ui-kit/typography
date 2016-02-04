# typography

Scaled typography for ESS

## Usage

You can use it out of the box

    import 'ui-kit-typography/index.ess'

...and configure it in your root

    {
      typographyBase: 15,
      typographyRange: 'h1 h2 h3 p',
      typographyScale: 1.1,
      typographyMargin: false
    }

You can use it as a skin

    %ui-kit-typography/index.ess(scale=1.15 range='.h1-big .h1-mid .h1-small')
    
Or you can use it dynamically

    import Typography from 'ui-kit-typography/index.ess?dynamic'
    
    Typography(scale=1.05 range='.Foo-h1 .Foo-h2 .Foo-h3 .Foo-h4'})

## Variables

- `base`: the base font, applied to the html selector (default: 12)
- `range`: a string of selectors which will receive the calculated properties (default: 'h1 h2 h3 h4 h5 h6 h7 h8 p small')
- `scale`: the ratio by which to size up or down the range (default: 1.125)
- `along`: multiplied with `base` (to keep `rem` sane), then used to weight the scale (default: 1.5)
- `round`: how much to round the calculated properties. For example, with a value of 1000, a property of 3.33333333333 will be rounded to 3.333 (default: 10)
- `mid`: which index in the range to use as the center of the scale (default: 2)

##

## License

MIT
