import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>
    <p>実装がサポートする必要のないプログラム構造</p>
    <p>[Note 1: それぞれの実装がサポートしていないすべてのconditionally-supportedな構造について文書にまとめます. ]</p>
</>

const DefnsCondSupp: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.cond.supp">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.13" title="conditionally-supported" link="/intro.defs/defns.cond.supp" linkString="defns.cond.supp" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.13" title="conditionally-supported" link="/intro.defs/defns.cond.supp" linkString="defns.cond.supp" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsCondSupp;