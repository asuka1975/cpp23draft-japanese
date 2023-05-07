import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>
    <p>{"library"} クラスまたは文字を表現するために使われる型</p>
    <p>[Note 1: string, iostream, 正規表現クラスのテンプレートパラメータの一つとして使われます. ]</p>
</>

const DefnsCharacterContainer: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.character container type">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.10" title="character container type" link="/intro.defs/defns.character.container" linkString="defns.character.container" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.10" title="defns.character.container" link="/intro.defs/defns.character.container" linkString="defns.character.container" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsCharacterContainer;