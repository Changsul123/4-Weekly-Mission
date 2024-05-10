import {
  useGetFolders,
  useGetUser,
  useGetSharedLinks,
} from "@/src/auth/data-access-auth/api";
import { Layout } from "@/src/sharing/feature-layout";
import { SharedLayout } from "@/src/page-layout/SharedLayout";
import { CardList } from "@/src/link/ui-card-list";
import { FolderInfo } from "@/src/folder/ui-folder-info";
import { ReadOnlyCard } from "@/src/link/ui-read-only-card";
import { SearchBar } from "@/src/link/ui-search-bar";
import { useSearchLink } from "@/src/link/util-search-link/useSearchLink";

const SharedPage = () => {
  const { data: folder } = useGetFolders();
  const { data: owner } = useGetUser();
  const { data: links } = useGetSharedLinks();

  const { searchValue, handleChange, handleCloseClick, result } =
    useSearchLink(links);

  return (
    <Layout>
      <SharedLayout
        folderInfo={
          <FolderInfo
            profileImage={owner?.imageSource}
            ownerName={owner?.name}
            folderName={folder?.name}
          />
        }
        searchBar={
          <SearchBar
            value={searchValue}
            onChange={handleChange}
            onCloseClick={handleCloseClick}
          />
        }
        cardList={
          <CardList>
            {result?.map((link) => (
              <ReadOnlyCard key={link?.id} {...link} />
            ))}
          </CardList>
        }
      />
    </Layout>
  );
};

export default SharedPage;
