import CppCode from "@/components/CppCode";
import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>
    <p>{"<library>"} アルゴリズムを要素の値を検査する前に適用する変換</p>
    <p>[Example 1:</p>
    <CppCode>
        {`std::pair<int, std::string_view> pairs[] = {{2, "foo"}, {1, "bar"}, {0, "baz"}};
std::ranges::sort(pairs, std::ranges::less{}, [](auto const& p) { return p.first; });`}
    </CppCode>
    <p>ペアの最初のメンバに基づいて昇順にソート</p>
    <CppCode>
        {`{{0, "baz"}, {1, "bar"}, {2, "foo"}}`}
    </CppCode>
    <p>]</p>
</>

const DefnsProjection: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.projection">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.44" title="projection" link="/intro.defs/defns.projection" linkString="defns.projection" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.44" title="projection" link="/intro.defs/defns.projection" linkString="defns.projection" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsProjection;