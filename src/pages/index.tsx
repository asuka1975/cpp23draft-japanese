import Field from '@/components/Field';
import IndexListItem from '@/components/IndexListItem';
import { IndexTree, IndexItem, HeadingLevel, nextLevel } from '@/types';
import { GetStaticProps } from 'next';
import { ReactNode } from 'react';

type Props = {
    data: IndexTree;
}

function createIndex(data: IndexTree | IndexItem, level: HeadingLevel = 1): ReactNode {
    return (
        <>
            {
                data instanceof Array<IndexItem | Array<IndexTree>> ?
                data.map(item => {
                    if(item instanceof Array<IndexTree>) {
                        return (<>
                            {item.map(v => createIndex(v, (nextLevel(level))))}
                        </>)
                    } else {
                        return <IndexListItem level={nextLevel(level)} index={item.index} title={item.title} link={item.link} />
                    }
                }) : <IndexListItem level={level} index={data.index} title={data.title} link={data.link} />
            }
        </>
    )
}

const Home: React.FC<Props> = ({ data }) => {

    return (
        <Field>
            {createIndex(data)}
        </Field>
    )
}

export default Home;

export const getStaticProps: GetStaticProps<Props> = async (context) => {
    const data = await fetch("http://localhost:3000/api/get_index").then(res => res.json());
    return {
        props: {
            data: data
        }
    }
}
