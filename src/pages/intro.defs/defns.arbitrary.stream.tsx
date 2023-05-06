import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>
    <p>{"<library>"}ストリーム長内の任意の整数位置を走査可能なストリーム</p>
    <p>[Note 1: すべてのarbitrary-positional streamはrepositionalなストリームでもあります。(<a href="/intro.defs#defns.repositional.stream">[defns.repositional.stream]</a>)]</p>
</>

const DefnsArbitraryStream: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.arbitrary.stream">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.2" title="arbitrary-positional stream" link="/intro.defs/defns.arbitrary.stream" linkString="defns.arbitrary.stream" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.2" title="arbitrary-positional stream" link="/intro.defs/defns.arbitrary.stream" linkString="defns.arbitrary.stream" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsArbitraryStream;