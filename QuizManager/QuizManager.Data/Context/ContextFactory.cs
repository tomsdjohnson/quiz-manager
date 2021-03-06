﻿using System;
using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace QuizManager.Data.Context
{
    public class ContextFactory : IDesignTimeDbContextFactory<QuizManagerContext>
    {
        // This method is called by entity framework to create a context when generating/running migrations
        public QuizManagerContext CreateDbContext(string[] args)
        {
            var basePath = Directory.GetCurrentDirectory();
            var builder = new ConfigurationBuilder()
                .SetBasePath(basePath)
                .AddJsonFile("appsettings.json");

            var config = builder.Build();

            var connectionString = config.GetConnectionString("Sql");

            if (string.IsNullOrWhiteSpace(connectionString))
                throw new InvalidOperationException(
                    $"Could not find a default connection string. Note: config basePath was: {basePath}.");

            return Create(connectionString);
        }

        public QuizManagerContext Create(string connectionString)
        {
            if (string.IsNullOrEmpty(connectionString))
                throw new ArgumentException($"{nameof(connectionString)} is null or empty.", nameof(connectionString));

            var optionsBuilder = new DbContextOptionsBuilder<QuizManagerContext>();

            optionsBuilder.UseSqlServer(connectionString);

            return new QuizManagerContext(optionsBuilder.Options);
        }
    }
}