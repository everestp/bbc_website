
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X, ChevronDown, Settings } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useData } from "@/context/DataContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
const {user}= useData()
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
  
     <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      { isScrolled && <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full bg-campus-blue flex items-center justify-center">
              <img src="/logo.jpg" alt="College Logo" className="h-10" />
            </div>
            <span className="text-2xl font-bold text-campus-blue dark:text-blue-400">
              BBC
            </span>
          </Link>

          {/* Desktop Navigation */}
  <div className="hidden md:flex items-center gap-6">
<NavigationMenu>
<NavigationMenuList className="flex items-center space-x-6">
<NavigationMenuItem>
<Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-campus-blue dark:hover:text-blue-400">
  Home
</Link>
</NavigationMenuItem>
<NavigationMenuItem>
<NavigationMenuTrigger className="text-gray-700 dark:text-gray-200 hover:text-campus-blue dark:hover:text-blue-400">
  Courses
</NavigationMenuTrigger>
<NavigationMenuContent>
  <ul className="text-gray-700 dark:text-gray-200">
    <ListItem 
      to="/courses/bsc-csit" 
      title="BSc CSIT"
      description="Bachelor of Science in Computer Science and Information Technology"
    />
    <ListItem 
      to="/courses/bca" 
      title="BCA"
      description="Bachelor of Computer Applications" 
    />
  </ul>
</NavigationMenuContent>
</NavigationMenuItem>
<NavigationMenuItem>
<Link to="/facilities" className="text-gray-700 dark:text-gray-200 hover:text-campus-blue dark:hover:text-blue-400">
  Facilities
</Link>
</NavigationMenuItem>
<NavigationMenuItem>
<Link to="/messages" className="text-gray-700 dark:text-gray-200 hover:text-campus-blue dark:hover:text-blue-400">
  Messages
</Link>
</NavigationMenuItem>
<NavigationMenuItem>

</NavigationMenuItem>
<NavigationMenuItem>
<Link to="/notices" className="text-gray-700 dark:text-gray-200 hover:text-campus-blue dark:hover:text-blue-400">
  Notices
</Link>
</NavigationMenuItem>
<NavigationMenuItem>
<Link to="/gallery" className="text-gray-700 dark:text-gray-200 hover:text-campus-blue dark:hover:text-blue-400">
  Gallery
</Link>
</NavigationMenuItem>
<NavigationMenuItem>
<Link to="/contact" className="text-gray-700 dark:text-gray-200 hover:text-campus-blue dark:hover:text-blue-400">
  Contact
</Link>
</NavigationMenuItem>
</NavigationMenuList>
</NavigationMenu>

<Link
to="/admission"
className="bg-campus-blue hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200"
>
Apply Now
</Link>
{

  user? (   <Link to="/admin/login" className="text-gray-700 dark:text-gray-200 hover:text-campus-blue dark:hover:text-blue-400">
<Button>Go to Console</Button>
</Link>):(
    
    
    <Link to="/admin/login" className="text-gray-700 dark:text-gray-200 hover:text-campus-blue dark:hover:text-blue-400">
<Settings className="w-5 h-5" />
</Link>
)
}

<ThemeToggle />
</div>


          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
            <Link to="/admin/login" className="text-gray-700 dark:text-gray-200 hover:text-campus-blue dark:hover:text-blue-400">
              <Settings className="w-5 h-5" />
            </Link>
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 dark:text-gray-200 hover:text-campus-blue dark:hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <details className="group">
                <summary className="flex cursor-pointer items-center justify-between text-gray-700 dark:text-gray-200 hover:text-campus-blue dark:hover:text-blue-400">
                  Courses
                  <ChevronDown 
                    size={16} 
                    className="transition group-open:rotate-180" 
                  />
                </summary>
                <div className="mt-2 ml-4 flex flex-col space-y-2">
                  <Link
                    to="/courses/bsc-csit"
                    className="text-gray-700 dark:text-gray-200 hover:text-campus-blue dark:hover:text-blue-400"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    BSc CSIT
                  </Link>
                  <Link
                    to="/courses/bca"
                    className="text-gray-700 dark:text-gray-200 hover:text-campus-blue dark:hover:text-blue-400"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    BCA
                  </Link>
                </div>
              </details>
              <Link
                to="/facilities"
                className="text-gray-700 dark:text-gray-200 hover:text-campus-blue dark:hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Facilities
              </Link>
              <Link
                to="/messages"
                className="text-gray-700 dark:text-gray-200 hover:text-campus-blue dark:hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Messages
              </Link>
           
              <Link
                to="/notices"
                className="text-gray-700 dark:text-gray-200 hover:text-campus-blue dark:hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Notices
              </Link>
              <Link
                to="/gallery"
                className="text-gray-700 dark:text-gray-200 hover:text-campus-blue dark:hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 dark:text-gray-200 hover:text-campus-blue dark:hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/admission"
                className="bg-campus-blue hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200 inline-block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </div>}
    </header>
  );
};

const ListItem = ({ 
  to, 
  title, 
  description 
}: { 
  to: string; 
  title: string; 
  description: string 
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={to}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {description}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export default Header;
