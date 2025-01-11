// components/Breadcrumb.js
import Link from "next/link";

const Breadcrumb = ({ breadcrumbItems }) => {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <ol>
        {breadcrumbItems.map((item, index) => (
          <li key={index} className="breadcrumb-item">
            {index < breadcrumbItems.length - 1 ? (
              <Link href={item.href}>
                <a>{item.label}</a>
              </Link>
            ) : (
              <span>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
