/** @type {import('next').NextConfig} */

import path from "path";
import { fileURLToPath } from "url";
import createNextIntlPlugin from "next-intl/plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// next-intl configuration
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

export default withNextIntl(nextConfig);
