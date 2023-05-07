import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>
    <p>{"<実行>"} ブロッキング操作の後の実行を (実行スレッドの実行手順を実行する実装以外では) ある条件が満たされるまでを待つ</p>
</>

const DefnsBlock: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.block">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.7" title="block" link="/intro.defs/defns.block" linkString="defns.block" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.7" title="block" link="/intro.defs/defns.block" linkString="defns.block" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsBlock;