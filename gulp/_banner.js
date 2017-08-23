import {version} from '../package.json';

const now = new Date();
const year = now.getFullYear();

export default `//
//  BackboneJS
//
//  Version: v${version}
//
//  Copyright (c)${year} Aaron Nathaniel Gray.
//  Copyright (c) 2010-2017 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//  Copyright (c) 2017 Derick Bailey, Muted Solutions, LLC.
//  Distributed under MIT license
//
//  https://backbonejs.com
//
\n`;
