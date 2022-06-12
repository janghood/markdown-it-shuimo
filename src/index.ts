/**
 * @description
 * @author 阿怪
 * @date 2022/4/12 11:40
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */

import MarkdownIt from 'markdown-it';
import { table } from "./rules/table";


export const JanghoodMdIt = () => {
  const markdown = new MarkdownIt();
  markdown.block.ruler.disable('table');
  markdown.block.ruler.before('code', 'wTable', table, {
    alt: ['paragraph', 'reference']
  });
  markdown.linkify.set({ fuzzyLink: false });

  const parseMd = (md: string) => {
    let tokens = markdown.parse(md, {});
    return markdown.renderer.render(tokens, {}, {});
  }

  return {
    parseMd
  }
}
