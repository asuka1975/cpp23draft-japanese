import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>
    <p>{"<library>"} 状態を変えることなくあるクラスのオブジェクトの状態にアクセスする自クラスのメンバ関数</p>
    <p>[Note 1: Observer functionはconstメンバ関数として指定されます]</p>
</>

const DefnsObserver: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.observer">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.37" title="observer function" link="/intro.defs/defns.observer" linkString="defns.observer" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.37" title="observer function" link="/intro.defs/defns.observer" linkString="defns.observer" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsObserver;