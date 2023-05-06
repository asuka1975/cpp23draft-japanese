import Field from '@/components/Field';
import IndexListItem from '@/components/IndexListItem';
import IndexListItemAnchor from '@/components/IndexListItemAnchor';
import { IndexTree, IndexItem, HeadingLevel, nextLevel } from '@/types';
import { readFile } from 'fs/promises';
import { GetStaticProps } from 'next';
import path from 'path';
import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';

type Props = {
    data: IndexTree;
}

function createIndexRecursive(data: IndexItem | IndexTree, setAnchor: Dispatch<SetStateAction<string>>, level: HeadingLevel): ReactNode {
    return (
        <>
            {
                data instanceof Array<IndexItem | IndexTree>
                    ? data.map(item => createIndexRecursive(item, setAnchor, nextLevel(level)))
                    : <IndexListItem level={level} index={data.index} title={data.title} link={data.link} />
            }
        </>
    )
}

function createIndex(data: IndexTree, anchor: string, setAnchor: Dispatch<SetStateAction<string>>, level: HeadingLevel = 1): ReactNode {
    return (
        <>
            {
                data.map(item => {
                    if(!(item instanceof Array<IndexItem | IndexTree>)) return <></>
                    const firstItem = item[0];
                    if(firstItem instanceof Array<IndexItem | IndexTree>) return <></>
                    if(firstItem.link === anchor || item.length == 1) {
                        return <>
                            {
                                firstItem instanceof Array<IndexItem | IndexTree> ? <></> : <IndexListItem level={level} index={firstItem.index} title={firstItem.title} link={firstItem.link} />
                            }
                            {
                                !(firstItem instanceof Array<IndexItem | IndexTree>) && anchor === firstItem.link ? item.slice(1).map(v => createIndexRecursive(v, setAnchor, level)) : <></>
                            }
                        </>
                    } else {
                        return <IndexListItemAnchor level={level} index={firstItem.index} title={firstItem.title} link={firstItem.link} setAnchor={setAnchor} />
                    }
                })
            }
        </>
    )
}

const Home: React.FC<Props> = ({ data }) => {
    const [anchor, setAnchor] = useState("");

    useEffect(() => {
        console.log(anchor);
    }, [anchor])

    return (
        <Field>
            {createIndex(data, anchor, setAnchor)}
        </Field>
    )
}

export default Home;

export const getStaticProps: GetStaticProps<Props> = async (context) => {
    const p = path.join(process.cwd(), "resource", "index.json")
    const data = await readFile(p, "utf8")
        .then(v => JSON.parse(v));
    return {
        props: {
            data: data
        }
    }
}
