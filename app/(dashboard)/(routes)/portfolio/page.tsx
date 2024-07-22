import GitHubRepos from "@/components/RepoCard";

const GitHubReposPage: React.FC = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8"> Repositories</h1>
      <GitHubRepos />
    </div>
  );
};

export default GitHubReposPage;
