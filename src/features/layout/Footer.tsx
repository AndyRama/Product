import { Typography } from "@/components/ui/typography";
import { Layout, LayoutContent } from "@/features/page/layout";
import { SiteConfig } from "@/site-config";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-card">
      <Layout className="mt-24 py-12">
        <LayoutContent className="flex justify-between max-lg:flex-col">
          <div className="flex flex-col gap-4">
            <div className="space-y-1">
              <Typography variant="h3">{SiteConfig.title}</Typography>
              <Typography variant="base">{SiteConfig.company.name}</Typography>
              <Typography variant="base">
                {SiteConfig.company.address}
              </Typography>
            </div>
            <Typography variant="muted" className="italic">
              © {new Date().getFullYear()} {SiteConfig.company.name} - All
              rights reserved.
            </Typography>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Typography variant="large">Site Map</Typography>
            <Typography
              as={Link}
              variant="muted"
              className="hover:underline"
              href="#"
            >
              Home
            </Typography>
            <Typography
              as={Link}
              variant="muted"
              className="hover:underline"
              href="/legal/privacy"
            >
              Blog
            </Typography>
            <Typography
              as={Link}
              variant="muted"
              className="hover:underline"
              href="#"
            >
              Expertise
            </Typography>
            <Typography
              as={Link}
              variant="muted"
              className="hover:underline"
              href="/legal/terms"
            >
              Méthodologie
            </Typography>
            <Typography
              as={Link}
              variant="muted"
              className="hover:underline"
              href="/legal/terms"
            >
              Projets
            </Typography>
          </div>
          <div className="flex flex-col items-end gap-4">
            <Typography variant="large">Legal</Typography>
            <Typography
              as={Link}
              variant="muted"
              className="hover:underline"
              href="/legal/terms"
            >
              Terms
            </Typography>
            <Typography
              as={Link}
              variant="muted"
              className="hover:underline"
              href="/legal/privacy"
            >
              Privacy
            </Typography>
          </div>
        </LayoutContent>
      </Layout>
    </footer>
  );
};
