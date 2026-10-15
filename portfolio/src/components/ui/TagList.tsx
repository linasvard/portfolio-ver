const TagList = ({ categories }: { categories: string[] }) => {
    return (
        <ul className="flex flex-wrap gap-xs text-dark mb-xs">
              {categories.map((cat) => (
                <li
                  key={cat}
                  className="text-dark text-sm font-medium not-last:after:content-['/'] not-last:after:px-xs">
                  {cat}
                </li>
              ))}
            </ul>
    )
}

export default TagList