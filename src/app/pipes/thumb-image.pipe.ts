import { Pipe, PipeTransform } from '@angular/core';
import {layoutPaths} from '../constants';

@Pipe({name: 'thumbImage'})
export class ThumbImagePipe implements PipeTransform {
    transform(value: string, args: string[]): any {
        if (!value) return value;
        return layoutPaths.images.root + value + '.jpeg';
    }
}
