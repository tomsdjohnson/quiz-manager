using Microsoft.EntityFrameworkCore.Migrations;

namespace QuizManager.Data.Migrations
{
    public partial class RemovedPositionFromQuestionObject : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Position",
                table: "Questions");

            migrationBuilder.AlterColumn<string>(
                name: "QuestionText",
                table: "Questions",
                nullable: false,
                oldClrType: typeof(int));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "QuestionText",
                table: "Questions",
                nullable: false,
                oldClrType: typeof(string));

            migrationBuilder.AddColumn<int>(
                name: "Position",
                table: "Questions",
                nullable: false,
                defaultValue: 0);
        }
    }
}
