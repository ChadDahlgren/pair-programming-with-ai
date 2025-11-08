# Pair Programming with AI - Project Architecture Plan

## Project Overview
Building a 6-page educational website teaching developers how to collaborate with AI tools as programming partners. The site focuses on methodology, practical examples, and resources for treating AI as a collaborative teammate rather than just a code generator.

**Target Audience:** Software developers, engineering students, technical leaders (ages 20-60)  
**Domain:** pairprogramming.ai (hosted via Cloudflare Pages)

---

## Technical Constraints

### MUST FOLLOW
- **No frameworks** - No Bootstrap, Tailwind, Foundation, etc.
- **Custom HTML/CSS only** - All code written from scratch
- **No CSS preprocessors** - No SASS, LESS, etc.
- **No JavaScript libraries** - Pure vanilla JS if needed (though not required for this phase)
- **Semantic HTML5** - Proper use of header, nav, main, section, article, footer elements
- **Valid W3C HTML/CSS** - Must pass validation
- **Simple and clean code** - Designed for instructor readability and grading

### ALLOWED
- CSS Grid and Flexbox for layouts
- CSS custom properties (variables) for design system
- Embedded videos (using standard HTML5 video or iframe)
- Web fonts (Google Fonts via link tag)
- Basic form elements (no form processing required)

---

## Site Structure

```
Home (index.html)
├── Learning Lab (learning-lab.html)
├── Prompting (prompting.html)
├── Methodology (methodology.html)
├── Resources (resources.html)
└── Feedback (feedback.html)
```

### Global Layout Structure
- **Header:** Site logo/name (clickable to home)
- **Navigation:** Left sidebar with 5 main links
- **Main Content:** Right content area (varies by page)
- **Footer:** Simple footer with nav links + copyright

---

## Design System

### Color Palette
```css
:root {
  --text: #efdffc;
  --background: #150320;
  --primary: #c07af1;
  --secondary: #9a3011;
  --accent: #e7ac20;
}
```

### Typography
- **Headings:** System font stack (clean, readable)
- **Body:** 16px base, 1.6 line-height
- **Hierarchy:** Clear distinction between h1, h2, h3

### Layout Grid
- **Max width:** 1200px centered
- **Sidebar:** 250px fixed width
- **Content:** Flexible, fills remaining space
- **Spacing system:** 8px base unit (8, 16, 24, 32, 40px)

### Responsive Breakpoints (if implemented)
- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: < 768px

---

## Page-by-Page Requirements

### 1. Home (index.html)
**Purpose:** Landing page introducing the site concept

**Structure:**
- Hero section with animated GIF/image placeholder showing AI code generation
- Hero title and subtitle
- "What is Pair Programming with AI?" section
- "What You'll Learn" bullet list
- Call-to-action encouraging visitors to explore

**Key Elements:**
- Large visual area (hero)
- Clear hierarchy (h1, h2, paragraphs)
- Unordered list for benefits
- Links to other sections

---

### 2. Learning Lab (learning-lab.html)
**Purpose:** Video demonstrations of orchestration model in action

**Structure:**
- Page title
- Brief introduction
- Lab navigation (Previous/Next + counter)
- Lab 1: Title, video placeholder, scenario, "What You'll See", key takeaways
- Lab 2: Same structure as Lab 1

**Key Elements:**
- Video placeholders (use div with background or iframe for actual videos)
- Consistent lab structure template
- Bullet lists for takeaways
- Simple pagination UI

---

### 3. Prompting (prompting.html)
**Purpose:** Teaching effective prompt design with examples

**Structure:**
- Page title
- Introduction paragraph
- "Core Principles" section with bullet list
- "Examples: Side-by-Side Comparison" section
  - Two columns: "Less Effective" vs "More Effective"
- "Using AI to Build Your Prompt" section with workflow description
- "Resources" section with downloadable links (can be placeholder links)

**Key Elements:**
- Two-column layout for comparison (CSS Grid or Flexbox)
- Visual distinction between good/bad examples (borders, spacing)
- Download links (even if they don't work yet)

---

### 4. Methodology (methodology.html)
**Purpose:** Long-form white paper style explanation

**Structure:**
- Page title
- Table of Contents (can be non-functional links initially)
- Section 1: Introduction with image placeholder
- Section 2: Core model explanation with diagram placeholder
- Section 3: Mindset discussion
- Section 4: Communication patterns
- Section 5: Summary

**Key Elements:**
- Clear section hierarchy (h2 for sections, h3 for subsections)
- Image placeholders (divs with borders and labels)
- Longer text blocks with proper paragraph spacing
- Table of contents styling

---

### 5. Resources (resources.html)
**Purpose:** Curated list of AI tools and downloadable materials

**Structure:**
- Page title
- Introduction paragraph
- "Recommended AI Tools" section
  - Tool card 1: Logo placeholder, name, description, link
  - Tool card 2: Same structure
  - Tool card 3: Same structure
- "Downloads & Templates" section with bullet list
- "External Resources" section with links

**Key Elements:**
- Card layout for tools (flexbox or grid)
- Logo placeholder boxes
- Consistent card styling
- Two types of lists: cards and bullets

---

### 6. Feedback (feedback.html)
**Purpose:** Simple contact form

**Structure:**
- Page title
- Brief introduction
- Form with fields:
  - First Name (text input, required)
  - Last Name (text input, required)
  - Email Address (email input, required)
  - Feedback (textarea, required)
  - Submit button

**Key Elements:**
- Proper form structure with labels
- Input validation attributes (required, type="email")
- Styled form elements
- Submit button (form can be non-functional)

---

## File Structure

```
/
├── index.html
├── learning-lab.html
├── prompting.html
├── methodology.html
├── resources.html
├── feedback.html
├── css/
│   └── styles.css
├── images/
│   └── (placeholders or actual images)
└── README.md (optional)
```

### CSS Organization
Organize CSS in this order:
1. CSS Reset/Normalization
2. CSS Custom Properties (:root)
3. Base styles (body, typography)
4. Layout (header, nav, main, footer)
5. Component styles (cards, forms, buttons)
6. Page-specific styles
7. Utility classes (if needed)

---

## Build Phases

### Phase 1: Foundation
- Create base HTML structure for index.html
- Build global CSS (reset, variables, typography)
- Implement layout system (header, nav, main, footer)
- Style navigation
- Complete homepage content

**Validation:** Homepage displays correctly with working navigation structure

---

### Phase 2: Core Pages
- Build Learning Lab page with video placeholders
- Build Prompting page with side-by-side layout
- Build Methodology page with long-form content

**Validation:** All content pages display correctly and maintain consistent layout

---

### Phase 3: Supporting Pages
- Build Resources page with card layout
- Build Feedback page with form

**Validation:** All 6 pages complete with proper styling

---

### Phase 4: Refinement
- Ensure all pages pass W3C validation
- Check cross-browser compatibility
- Review for consistency
- Final testing and adjustments

**Validation:** Site is production-ready and meets all course requirements

---

## Quality Checklist

### Before Submission
- [ ] All HTML passes W3C validation
- [ ] All CSS passes W3C validation
- [ ] No frameworks or libraries used
- [ ] All links work (internal navigation)
- [ ] All pages have consistent styling
- [ ] Form includes required 4 fields
- [ ] Site has proper semantic HTML
- [ ] Code is clean and readable
- [ ] Comments included where helpful
- [ ] File naming follows conventions (lowercase, hyphens)

---

## Development Notes

### Working with Cursor
When building with AI assistance:
1. Start with structural HTML before styling
2. Build one page completely before moving to the next
3. Test frequently in browser
4. Keep prompts focused on specific components
5. Reference this architecture doc in each session

### Keeping It Simple
- Use standard CSS techniques (no fancy animations unless time permits)
- Focus on clean, readable code over clever solutions
- Prioritize proper structure and semantics
- Remember: instructors expect beginner-level work

### Content Strategy
- Use placeholder text (lorem ipsum) where needed
- Placeholder images can be colored divs with labels
- Links don't need to go anywhere external (can be #)
- Form doesn't need to submit anywhere (action="#")

---

## Course Requirements Met

✓ 4-6 pages (we have 6)  
✓ Navigation system (left sidebar)  
✓ Form with 4+ fields (Feedback page)  
✓ Custom HTML/CSS (no frameworks)  
✓ Semantic HTML structure  
✓ Multiple content types (text, lists, images, video, form)  
✓ Consistent design across pages  
✓ Proper file organization

---

## Success Criteria

The project is successful when:
1. All 6 pages are complete and styled
2. Navigation works across all pages
3. HTML/CSS validates
4. Site matches wireframe structure
5. Code is clean and well-organized
6. Form meets requirements
7. Instructor can grade easily

---

*This architecture plan serves as the guiding document for building pairprogramming.ai. Reference it throughout development to ensure all requirements are met and the project stays on track.*
