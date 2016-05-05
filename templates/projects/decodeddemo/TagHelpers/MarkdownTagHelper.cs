using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CommonMark;
using Microsoft.AspNetCore.Razor.TagHelpers;

namespace <%= namespace %>.TagHelpers
{
    [HtmlTargetElement("markdown")]
    [HtmlTargetElement("*", Attributes="markdown")]
    public class MarkdownTagHelper : TagHelper
    {
        public override async Task ProcessAsync(TagHelperContext context, TagHelperOutput output)
        {
            var childContent = await output.GetChildContentAsync();
            var markdownContent = CommonMarkConverter.Convert(childContent.GetContent());
            output.Content.SetHtmlContent(markdownContent);
            output.TagName = null;
        }
    }
}
