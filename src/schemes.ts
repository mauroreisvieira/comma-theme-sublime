import {
    generateScheme,
    ISchemeSetting,
    IColors,
} from '@meetio/scheme-generator';
import * as pallete from '@meetio/meetio-colors';

import rules from './schemes/index';

interface IScheme {
    name: string;
    author: string;
    variables: IColors;
}

[
    {
        name: 'Meetio-Theme-Dark',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: pallete.dark,
    },
    {
        name: 'Meetio-Theme-Light',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: pallete.light,
    },
].map((item: IScheme) => {
    const settings: ISchemeSetting = {
        colors: item.variables,
        rules: [
            ...rules,
            ...[],
        ],
    };
    generateScheme(item.name, item.author, item.name, settings, 'schemes');
});
