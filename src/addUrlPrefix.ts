

/**
 * @see https://penpen-dev.com/blog/nextjs-subdirectory/
 */
export default function addUrlPrefix(url: string) {
  return process.env.NEXT_PUBLIC_URL_PREFIX === "prod"
    ? `/MUI-SandBox${url}`
    : url;
}
