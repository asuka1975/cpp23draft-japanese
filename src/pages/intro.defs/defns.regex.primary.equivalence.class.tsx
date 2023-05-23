import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>
    <p>{"<正規表現>"} 同じ主要なソートキー、すなわち、アクセントや大文字・小文字、ロケール固有の調整ではなく文字の形のみで重み付けするものを共有する1つ以上の文字の集合</p>
</>

const DefnsRegexPrimaryEquivalenceClass: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.regex.primary.equivalence.class">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.41" title="primary equivalence class" link="/intro.defs/defns.regex.primary.equivalence.class" linkString="defns.regex.primary.equivalence.class" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.41" title="primary equivalence class" link="/intro.defs/defns.regex.primary.equivalence.class" linkString="defns.regex.primary.equivalence.class" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsRegexPrimaryEquivalenceClass;