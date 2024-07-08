export const persianToSlug = (text: string) => {
 // Step 1: Replace spaces with hyphens
 text = text.replace(/ /g, "-");

 // Step 2: Remove or handle any non-alphanumeric characters except hyphens
 // For Persian, we typically don't need to remove anything else.
 // If there are specific characters you want to remove, you can add them to the regex.
 //  text = text.replace(/[^\w\-]/g, "");

 return text;
};
