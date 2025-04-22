import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  isCurator?: boolean;
  socialLinks?: {
    email?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}

const TeamMember = ({
  name,
  role,
  bio,
  image,
  isCurator = false,
  socialLinks
}: TeamMemberProps) => {
  return (
    <Card className={`overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${isCurator ? 'border-2 border-blue-500' : ''}`}>
      <div className="relative">
        {isCurator && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-red-500 text-white text-xs px-3 py-1 rounded-full z-10">
            Куратор проекта
          </div>
        )}
        <img 
          src={image || "/placeholder.svg"} 
          alt={name} 
          className="w-full h-64 object-cover"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-blue-600 font-medium mb-3">{role}</p>
        <p className="text-gray-600 mb-4">{bio}</p>
        
        {socialLinks && (
          <div className="flex space-x-3">
            {socialLinks.email && (
              <a 
                href={`mailto:${socialLinks.email}`} 
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label={`Написать ${name} на email`}
              >
                <Mail size={18} />
              </a>
            )}
            {socialLinks.facebook && (
              <a 
                href={socialLinks.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label={`Facebook ${name}`}
              >
                <Facebook size={18} />
              </a>
            )}
            {socialLinks.instagram && (
              <a 
                href={socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label={`Instagram ${name}`}
              >
                <Instagram size={18} />
              </a>
            )}
            {socialLinks.linkedin && (
              <a 
                href={socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label={`LinkedIn ${name}`}
              >
                <Linkedin size={18} />
              </a>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TeamMember;
