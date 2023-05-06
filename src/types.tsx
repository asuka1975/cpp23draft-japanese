

export type IndexItem = {
    index: string;
    title: string;
    link: string;
};

export type IndexTree = Array<IndexItem | Array<IndexTree>>;

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export function nextLevel(level: HeadingLevel): HeadingLevel {
    switch(level) {
    case 1:
        return 2;
    case 2:
        return 3;
    case 3:
        return 4;
    case 4:
        return 5;
    case 5:
        return 6;
    case 6:
        return 6;
    default:
        const _: never = level;
        return level;
    }
}

export function toWidth(level: HeadingLevel): number {
    switch(level) {
    case 1:
        return 10;
    case 2:
        return 12;
    case 3:
        return 14;
    case 4:
        return 16;
    case 5:
        return 20;
    case 6:
        return 24;
    default:
        const _: never = level;
        return level;
    }
}