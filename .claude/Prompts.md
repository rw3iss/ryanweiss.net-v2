I'd like you to help me overhaul the portfolio site so it becomes a super-futuristic dream-like magical portfolio site, with advanced animations and unique view features such as elements that scroll into view, and large full height sections that the user can scroll through.
There should be gigantic background elements that harmonize the sections between each other. These can be any kind of natural element or glyphs or lights and gradients, shadows. Make it a very interested textured background that seems like you're floating through space or the deep sea, with lights that periodically shine as you scroll.

Then, we want to create interactive elements in the sections for their purpose.
The site portfolio should outline features in the main top full page section, and the user should be able to click or hold the mouse along the left or right side of the page to have the section animate its content sideways, but it should look like it's rotating around a large circular belt as it scrolls left and right (so give them some skewing as they move towards the edges). The user should also be able to page up and down, and the circular rows should animate to another circular row up or down, and they should able to continue scrolling that separate row left or right, and so on.
Assembly the rows of animated circular items across the width of the entire page, and make it look very nice, as if the edges of the circular items fade in and out as they leave the screen, and skew a bit towards the edges.
Show very subtle 'up' and 'down wide arrow buttons, very thin, that show when hovering towards the top or bottom of the row. The arrow buttons can be clicked to animate the rows up or down out of view. The previous or next rows should show the bottom or top of their elements every so slightly (so fade them out at the top if they are the previous row, and at the bottom if they are the next row).

Make the whole system look like the user is navigating circular belts of items in space, and can scroll them left or right, or page them up and down.

The background should be mystical, space-like, with random aboritions swirling around in space far and near.

When a row item in one of the circular belts is clicked, that item should grow and expand to full page width and height, as if the screen was zooming into it.
Maybe you could create a class or keyframe animation on the entire containar of the homepage content, then animate scaling it from the center when the user clicks an item, so it looks like it's zooming in, but do that as it also fades, or otherwise shows a background cover fading in behind the zoomed in element, then you can just show a new full-page element into the view, with that item's content, when an element is focused to full screen.
When the full page item details are loading... let it finish animating into view, then start showing the content in a sequenced, animated fashion, so all the elements will "drop" and "fade" into view when it starts loading, ie. animate the item title in first, then the metadata, then the content and images, if there are any. I want it to look nice and slick. There should be a close button in the upper right corner of the full screen details view, and a similar back icon in the upper left corner. Both should close the full screen item view by animating it out of view, animating the background cover away, and then zooming the main container back out to the full view of circular row items again.

For the item content in the rows, start with some mock data in a defined schema.
Each circular row should be a different category, based on any dynamic tag, such as:
Featured
Work
Hobbies
Blog

Create a json array for the data, each entry being a row with a definition such as:
{
	key: "featured",
	label: "Featured",
	order: 0,
	items: [
		{
			id: "1121231",
			name: "This is the project Name",
			description: "This is some brief description.",
			image: "src thumbnail image",
			media: [
				{
					url: "url to media",
					type: "image",
					description: "short description"
				},
				{
					url: "url to media",
					type: "video",
					description: "short description"
				},
			],
			details: "Arbitrary text content that can be rendered later to show more details in the details view."
		}
	]
}

Create a mock data file for the data, and import it to the Homepage.
Then recode the Homepage entirely to support the above restyling.
Be sure to use external scss files for the styles, and dynamic JS styles only if needed to achieve the effects.
Take your time and analyze the styling so it will be highly impressive and intriguing, dark and mysterious, yeah elements of subtle lights, and a focus on well-refined animations and smooth scrolling, blurred edges and gradients, with elements fading in and out very cleanly.
Use non-standard images or styles that have a more unique feeling, but are still very clean and harmonious.
Use advanced css or JS techniques to achieve smooth and well-performing, efficient and optimized animations and interactions.